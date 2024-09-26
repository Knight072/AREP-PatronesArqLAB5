package edu.escuelaing.arep.repository;

import edu.escuelaing.arep.model.Delivery;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface DeliveryRepository extends CrudRepository<Delivery, Long> {

    List<Delivery> findByLastName(String lastName);

    Delivery findById(long id);

    String getAddress();
}
