package edu.escuelaing.arep.service;

import edu.escuelaing.arep.repository.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class DeliveryService {

    private final DeliveryRepository deliveryRepository;

    @Autowired
    public DeliveryService(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    public String getAddress() {
        return deliveryRepository.getAddress();
    }
}
