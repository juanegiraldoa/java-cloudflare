FROM docker.io/library/amazoncorretto:24
LABEL Author="dev.juanes"

WORKDIR /app

COPY container/api/gradlew ./gradlew
COPY container/api/gradle ./gradle

RUN chmod +x ./gradlew

COPY container/api/build.gradle ./build.gradle
COPY container/api/settings.gradle ./settings.gradle

COPY container/api/src ./src

RUN ./gradlew build --no-daemon -x test

RUN cp build/libs/api.jar api.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "api.jar"]
