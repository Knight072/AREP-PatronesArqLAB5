package edu.escuelaing.arep.repository;

import java.util.List;

import edu.escuelaing.arep.model.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {

    List<Customer> findByLastName(String lastName);

    Customer findById(long id);
}
