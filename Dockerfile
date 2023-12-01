FROM quay.io/wildfly/wildfly:29.0.0.Final-jdk17
ADD target/weblab4.war /opt/jboss/wildfly/standalone/deployments/
