package com.example.BankDemo2.repositories;


import com.example.BankDemo2.models.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

    Customer findBycustomerNumber(Long customerNumber);
    Customer findByUsernameAndPassword(String username, String password);


}