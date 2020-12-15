package com.example.BankDemo2.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "accounts")
public class Account {


    //======================================================VARIABLES============================================================================

    @Id
    @GeneratedValue(generator = "sequence-generator")
    @GenericGenerator(
            name = "sequence-generator",
            strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
            parameters = {
                    @org.hibernate.annotations.Parameter(name = "sequence_name", value = "user_sequence"),
                    @org.hibernate.annotations.Parameter(name = "initial_value", value = "8000000"),
                    @org.hibernate.annotations.Parameter(name = "increment_size", value = "1")
            }
    )
    private Long accountNumber;

    private double balance;
    private String acct_type;
    private double interest_rate;
    private LocalDate date_of_creation;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customerNumber", nullable = false)
    private Customer customer;

    @JsonIgnore
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Transaction> transactions;



   //===================================================CONSTUCTORS===============================================================================

    public Account() {
    }

    public Account(double balance, String acct_type, double interest_rate, Customer customer) {
        this.balance = balance;
        this.acct_type = acct_type;
        this.interest_rate = interest_rate;
        this.customer = customer;
        this.date_of_creation = LocalDate.now();
    }

    //===================================================GETTERS AND SETTERS===============================================================================


    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return this.balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public String getAcct_type() {
        return acct_type;
    }

    public void setAcct_type(String acct_type) {
        this.acct_type = acct_type;
    }

    public double getInterest_rate() {
        return interest_rate;
    }

    public void setInterest_rate(double interest_rate) {
        this.interest_rate = interest_rate;
    }

    public LocalDate getDate_of_creation() {
        return date_of_creation;
    }

    public void setDate_of_creation(LocalDate date_of_creation) {
        this.date_of_creation = date_of_creation;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNumber=" + accountNumber +
                ", balance=" + balance +
                ", acct_type='" + acct_type + '\'' +
                ", interest_rate=" + interest_rate +
                ", date_of_creation=" + date_of_creation +
                ", customer=" + customer +
                '}';
    }
}