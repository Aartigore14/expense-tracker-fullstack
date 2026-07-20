package com.aarti.expensetracker.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "expenses")
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)


    private LocalDate date;

    private String description;

    @NotBlank(message = "Title is required")
    private String title;

    @NotNull(message = "Amount is required")

    @Positive(message = "Amount must be greater than 0")
    private double amount;

    @NotBlank(message = "Category is required")
    private String category;
}