FROM maven:3.9.5-eclipse-temurin-17 as build
WORKDIR /usr/src/app
COPY . .
RUN mvn clean package

FROM quay.io/wildfly/wildfly:29.0.0.Final-jdk17
COPY --from=build /usr/src/app/target/weblab4.war /opt/jboss/wildfly/standalone/deployments/
