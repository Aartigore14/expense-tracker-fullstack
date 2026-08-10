package com.aarti.expensetracker.dto;

public class ExpenseSummaryDTO {
    private Double totalExpenses;
    private Long totalTransactions;
    public ExpenseSummaryDTO(Double totalExpenses, Long totalTransactions){
        this.totalExpenses = totalExpenses;
        this.totalTransactions = totalTransactions;
    }
    public Double getTotalExpenses() {
        return totalExpenses;
    }
    public Long getTotalTransactions() {
        return totalTransactions;
    }
}
