# Delivery Management System with Spring Boot and MySQL

This project is a delivery management system implemented using Spring Boot, JPA (Java Persistence API), and MySQL. The system allows users to perform 
CRUD operations (Create, Read, Update, Delete). The properties are stored in a MySQL database, and the application exposes a REST API for interaction.

https://www.youtube.com/watch?v=-WPiVqTihrc

## Getting Started
### Prerequisites

1. **Java** (version 8 or above)
    
    ```bash
    java -version
    ```

    Should return something like:
    
    ```bash
    java version "21.0.3" 2024-04-16 LTS
    Java(TM) SE Runtime Environment (build 21.0.3+7-LTS-152)
    Java HotSpot(TM) 64-Bit Server VM (build 21.0.3+7-LTS-152, mixed mode, sharing)
    ```

2. **Maven**
    - Download Maven from [here](http://maven.apache.org/download.cgi)
    - Follow the installation instructions [here](https://maven.apache.org/install.html)

    Verify the installation:

    ```bash
    mvn -version
    ```

    Should return something like:

    ```bash
    Apache Maven 3.9.6
    ```

3. **Docker**
    - Install Docker by following the instructions [here](https://docs.docker.com/get-docker/)
    - Verify the installation:
    
    ```bash
    docker --version
    ```

    Should return something like:

    ```bash
    Docker version 27.1.1
    ```
    
## Installing

1. Clone the repository and navigate into the project directory:
    
    ```bash
    git clone https://github.com/Knight072/AREP-PatronesArqLAB5.git 
    cd AREP-PatronesArqLAB5
    ```

2. Build the project:
    
    ```bash
    mvn clean install
    ```
  
1. Start the MySQL service using Docker Compose:

    ```bash
    docker-compose up -d
    ```

2. Update your `application.properties` with the following configuration to connect to the MySQL container in our local enviroment:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    spring.datasource.username=root
    spring.datasource.password=verysecret
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
    ```
3. Run the application:
    
    ```bash
    java -jar target/AREP-PatronesArquitecturalesLAB5-1.0-SNAPSHOT.jar
    ```

4. Access the index.html at: `http://localhost:8080`

## Test Resutls

To run the tests use:

  ```bash
  mvn test
  ```
![image](https://github.com/user-attachments/assets/2d0ee7b9-a5ad-4b8d-9a43-6b4e07c4adfc)

## Deployment in AWS

To deploy the program on AWS, we need to have two instances, in this case, we will use an Aws linux, to run the .jar file and Ubuntu, for our mysql database.

1. We enter in the Ubuntu VM through ssh protocol and update the packages.

    ```bash
    ssh -i "key.pem" [the name of our aws VM]
    sudo apt-get update
    ```

2. Install MySQL:

    ```bash
    sudo apt-get install mysql-server
    ```
3. Verify MySQL status
   
     ```bash
    sudo systemctl status mysql
    ```
     ![img_4.png](img_4.png)

4. Now we log in with the root user

    ```bash
    sudo mysql -u root
    ```

5. Create user and give privileges.

    ```bash
    CREATE USER 'ADMIN'@'%' IDENTIFIED BY 'password';
    ```

    ```bash
    GRANT ALL PRIVILEGES ON *.* TO 'ADMIN'@'%' WITH GRANT OPTION;
    ```

    ```bash
    FLUSH PRIVILEGES;
    ```

6. Create the data base;

    ```bash
    CREATE DATABASE mydatabase;
    ```

7. Enter the following path and change the file by adding

    ```bash
    sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
    ```

    ```bash
    bin-address = 0.0.0.0
    ```
  

8. Make the following changes to the code for connecting in a remote enviroment, we change localhost with the Ubuntu VM public IP, also the username
   and password that we created in our database.

   ```properties
    spring.datasource.url=jdbc:mysql://52.23.200.61:3306/mydatabase?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
    spring.datasource.username=ADMIN
    spring.datasource.password=password
    spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
   ```


9. The project's .jar file is uploaded to the ServerWebDocker virtual machine

    

10. Install java in our aws linux VM for running the .jar file 

    ```bash
    sudo yum install java-17-amazon-corretto -y
    ```

11. Execute the proyect with the command

    ```bash
    java -jar PropertyApplication-0.0.1-SNAPSHOT.jar
    ```

    And in the following url you can view the project:

    ```bash
    http://ec2-3-91-232-65.compute-1.amazonaws.com:8080/
    ```
    The url changes every time the instances AWS EC2 is run.

    ![img.png](img.png)

    

## Built With

- [Maven](https://maven.apache.org/) - Dependency Management
- [Spring Boot](https://spring.io/projects/spring-boot) - Framework for building microservices
- [Docker](https://www.docker.com/) - Containerization
- [MySQL](https://www.mysql.com/) - Relational Database

## Versioned

  We use [Git](https://github.com/) for version control.

## Author

  * **Daniel Felipe Rojas Hernández** - [Knight072](https://github.com/Knight072)

## Date

  October 03, 2024

![img_5.png](img_5.png)

![img_1.png](img_1.png)

![img_2.png](img_2.png)

![img_3.png](img_3.png)
