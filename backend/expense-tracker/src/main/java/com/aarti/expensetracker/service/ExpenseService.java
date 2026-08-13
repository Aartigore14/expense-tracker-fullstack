package com.aarti.expensetracker.service;

import com.aarti.expensetracker.dto.CategorySummaryDTO;
import com.aarti.expensetracker.dto.ExpenseSummaryDTO;
import com.aarti.expensetracker.dto.MonthlySummaryDTO;
import com.aarti.expensetracker.entity.Expense;
import com.aarti.expensetracker.entity.User;
import com.aarti.expensetracker.repository.ExpenseRepository;
import com.aarti.expensetracker.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import com.aarti.expensetracker.exception.ExpenseNotFoundException;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;
    private final UserRepository userRepository;

    public ExpenseService(ExpenseRepository expenseRepository, UserRepository userRepository) {
        this.expenseRepository = expenseRepository;
        this.userRepository = userRepository;
    }

    public List<Expense> getAllExpenses() {
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return expenseRepository.findByUser_Email(email);
    }
    public Expense createExpense(Expense expense){
    String email = SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getName();
        User user = userRepository.findByEmail(email).orElseThrow(()->new  RuntimeException("User not found"));
        expense.setUser(user);
        return expenseRepository.save(expense);
    }
    public Expense updateExpense(Long id, Expense expense) {
        Expense existingExpense = expenseRepository.findById(id)
                .orElseThrow(() -> new ExpenseNotFoundException("Expense with ID "+ id + " not found"));

        existingExpense.setTitle(expense.getTitle());
        existingExpense.setAmount(expense.getAmount());
        existingExpense.setCategory(expense.getCategory());
        existingExpense.setDate(expense.getDate());
        existingExpense.setDescription(expense.getDescription());

        return expenseRepository.save(existingExpense);
    }
    public List<Expense> getExpenseByCategory(String category){
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return expenseRepository.findByCategoryAndUserEmail(category, email);
    }

    public Double getTotalExpenses(){
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return expenseRepository.getTotalExpensesByUser(email);
    }

    public List<CategorySummaryDTO> getCategorySummary(){
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return expenseRepository.getCategorySummary(email);
    }

    public List<MonthlySummaryDTO> getMonthlySummary(){
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        List<Object[]> results = expenseRepository.getMonthlySummary(email);
        return results.stream()
                .map(row -> new MonthlySummaryDTO((String) row[0],((Number)row[1]).doubleValue())).toList();
    }

    public ExpenseSummaryDTO getExpenseSummary(){
        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();
        return expenseRepository.getExpenseSummary(email);
    }
    public void deleteExpense(Long id){
        expenseRepository.deleteById(id);
    }
}
