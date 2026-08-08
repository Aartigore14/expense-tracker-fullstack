package com.aarti.expensetracker.repository;

import com.aarti.expensetracker.dto.CategorySummaryDTO;
import com.aarti.expensetracker.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {
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
}
