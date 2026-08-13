package com.aarti.expensetracker.repository;

import com.aarti.expensetracker.dto.CategorySummaryDTO;
import com.aarti.expensetracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.aarti.expensetracker.dto.MonthlySummaryDTO;
import com.aarti.expensetracker.dto.ExpenseSummaryDTO;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

    List<Expense> findByUser_Email(String email);
    List<Expense> findByCategoryAndUserEmail(String category, String email);

    @Query("SELECT COALESCE(SUM(e.amount),0) FROM Expense e WHERE e.user.email=:email")
    Double getTotalExpensesByUser(@Param("email") String email);

    @Query("""
SELECT new com.aarti.expensetracker.dto.CategorySummaryDTO(
    e.category,
    SUM(e.amount)
)
FROM Expense e
WHERE e.user.email = :email
GROUP BY e.category
""")
    List<CategorySummaryDTO> getCategorySummary(@Param("email") String email);

    @Query(value = """
        SELECT DATE_FORMAT(e.date, '%Y-%m') AS month,
               SUM(e.amount) AS total
        FROM expenses e
        JOIN users u ON e.user_id = u.id
        WHERE u.email = :email
        GROUP BY DATE_FORMAT(e.date, '%Y-%m')
        ORDER BY DATE_FORMAT(e.date, '%Y-%m')
        """, nativeQuery = true)
    List<Object[]> getMonthlySummary(@Param("email") String email);

    @Query("""
    SELECT new com.aarti.expensetracker.dto.ExpenseSummaryDTO(
        COALESCE(SUM(e.amount), 0.0),
        COUNT(e)
    )
    FROM Expense e
    WHERE e.user.email = :email
""")
    ExpenseSummaryDTO getExpenseSummary(@Param("email") String email);
}
