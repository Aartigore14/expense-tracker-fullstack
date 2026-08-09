package com.aarti.expensetracker.dto;

public class MonthlySummaryDTO {
    private String month;
    private Double total;

    public MonthlySummaryDTO(String month, Double total){
        this.month = month;
        this.total = total;
    }
    public String getMonth(){
        return month;
    }
    public Double getTotal(){
        return total;
    }
}
