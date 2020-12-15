package com.example.BankDemo2.repositories;

import com.example.BankDemo2.models.Transaction;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {

    List<Transaction> findByAccount_AccountNumber(Long account_accountNumber);
}
