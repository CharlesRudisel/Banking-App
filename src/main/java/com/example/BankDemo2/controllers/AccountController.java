package com.example.BankDemo2.controllers;


import com.example.BankDemo2.models.Account;
import com.example.BankDemo2.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {return (List<Account>) accountRepository.findAll();}

    @GetMapping("/accounts/{customer_number}")
    public List<Account> getCustomerByCustomerNumber(@PathVariable(value = "customer_number") Long customerNumber){
        return accountRepository.findByCustomer_CustomerNumber(customerNumber);
    }

    @GetMapping("/accounts/focus/{account_number}")
    public Account getCustomerByAccountNumber(@PathVariable(value = "account_number") Long accountNumber){
        return accountRepository.findAccountByAccountNumber(accountNumber);
    }

    @PutMapping("/accounts/focus/{account_number}")
    public ResponseEntity<?> updateTopic(@RequestBody Account account, @PathVariable long account_number) {
        Account newAccount = accountRepository.findAccountByAccountNumber(account_number);
        if (newAccount != null) {
            newAccount.setBalance(account.getBalance());

            accountRepository.save(newAccount);
            System.out.println("Account Update was made: Account Balance Modified");

        }
        return null;
    }



}
