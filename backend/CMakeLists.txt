CMAKE_MINIMUM_REQUIRED(VERSION 3.0)
project(PortfolioGenerator)

ADD_SUBDIRECTORY(test/googletest)

ADD_EXECUTABLE(Tests
    test/userTest.cpp
    src/User.cpp
    src/Descriptions.cpp
    test/SocialDescriptionTest.cpp
    src/SocialDescription.cpp
    test/WorkDescriptionTest.cpp
    src/WorkDescription.cpp
    test/EducationDescriptionTest.cpp
    src/EducationDescription.cpp
    test/ReferenceDescriptionTest.cpp
    src/ReferenceDescription.cpp
    test/LanguageDescriptionTest.cpp
    src/LanguageDescription.cpp
    
)

ADD_EXECUTABLE(Generate
    src/main.cpp
    src/Descriptions.cpp
    src/EducationDescription.cpp
    src/User.cpp
    src/WorkDescription.cpp
    src/SocialDescription.cpp
    src/TemplateGenerator.cpp
    src/ReferenceDescription.cpp
    src/LanguageDescription.cpp
    src/UserInput.cpp
)

TARGET_LINK_LIBRARIES(Tests gtest)
TARGET_COMPILE_DEFINITIONS(Tests PRIVATE gtest_disable_pthreads=ON)