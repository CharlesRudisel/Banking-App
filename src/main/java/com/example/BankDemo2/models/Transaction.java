package com.example.BankDemo2.models;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @Column(unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long transactionNumber;

    private String description;

    private String category;
    private double amount;
    private LocalDate date_of_creation;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "accountNumber", nullable = false)
    private Account account;


    public Transaction() {

    }

    public Transaction(double amount, String description, String category, Account account) {

        this.amount = amount;
        this.description = description;
        this.category = category;
        this.date_of_creation = LocalDate.now();
        this.account = account;
    }

    public Long getTransactionNumber() {
        return transactionNumber;
    }

    public void setTransactionNumber(Long transactionNumber) {
        this.transactionNumber = transactionNumber;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDate getDate() {
        return date_of_creation;
    }

    public void setDate(LocalDate date) {
        this.date_of_creation = date;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public String getCategory() { return category; }

    public void setCategory(String category) { this.category = category; }
}
