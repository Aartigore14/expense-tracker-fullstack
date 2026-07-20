package com.aarti.expensetracker.service;

import com.aarti.expensetracker.entity.Expense;
import com.aarti.expensetracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;
import com.aarti.expensetracker.exception.ExpenseNotFoundException;
import java.util.List;

@Service
public class ExpenseService {

    private final ExpenseRepository expenseRepository;

    public ExpenseService(ExpenseRepository expenseRepository) {
        this.expenseRepository = expenseRepository;
    }

    public List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }
    public Expense createExpense(Expense expense){
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
        return expenseRepository.findByCategory(category);
    }
    public void deleteExpense(Long id){
        expenseRepository.deleteById(id);
    }
}
