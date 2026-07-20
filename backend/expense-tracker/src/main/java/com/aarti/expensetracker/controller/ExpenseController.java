package com.aarti.expensetracker.controller;

import com.aarti.expensetracker.entity.Expense;
import com.aarti.expensetracker.service.ExpenseService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/expenses")
public class ExpenseController {

    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping
    public List<Expense> getAllExpenses() {
        return expenseService.getAllExpenses();
    }

    @PostMapping
    public Expense createExpense(@Valid @RequestBody Expense expense){
        return  expenseService.createExpense(expense);
    }
//    public Expense addExpense(@RequestBody Expense expense){
//        return expenseService.saveExpense(expense);
//    }
    @PutMapping("/{id}")
    public Expense updateExpense(@PathVariable Long id,@Valid @RequestBody Expense expense){
        return expenseService.updateExpense(id,expense);
    }
    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable Long id){
        expenseService.deleteExpense(id);
    }
}
