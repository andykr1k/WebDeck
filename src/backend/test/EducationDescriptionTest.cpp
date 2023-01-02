#include "../header/EducationDescription.h"
#include "gtest/gtest.h"
#include <string>
#include <iostream>

using namespace std;

// private:
        // string major;
        // string school;
        // string startTime; 
        // string endTime;
// public:
        // EducationDescription(); DONE
        // void setMajor(string m); DONE
        // string getMajor(); DONE
        // void setSchool(string s); DONE 
        // string getSchool(); DONE 
        // void setStartTime(string s); DONE
        // string getStartTime(); DONE 
        // void setEndTime(string e); DONE 
        // string getEndTime(); DONE

TEST(EducationDescriptionTests, testConstructor) {
        EducationDescription *person = new EducationDescription();
        EXPECT_EQ (person->getMajor(), "");
        EXPECT_EQ (person->getSchool(), "");
        EXPECT_EQ (person->getStartTime(), ""); 
        EXPECT_EQ (person->getEndTime(), "");
}

TEST(EducationDescriptionTests, testSetMajor) {
        EducationDescription *person = new EducationDescription();
        person->setMajor("Data science");
        EXPECT_EQ (person->getMajor(), "Data science");
}

TEST(EducationDescriptionTests, testSetSchool) {
        EducationDescription *person = new EducationDescription();
        person->setSchool("UCR");
        EXPECT_EQ (person->getSchool(), "UCR");
}

TEST(EducationDescriptionTests, testStartTime) {
        EducationDescription *person = new EducationDescription();
        person->setStartTime("11:14");
        EXPECT_EQ (person->getStartTime(), "11:14");
}

TEST(EducationDescriptionsTests, testEndTime) {
        EducationDescription *person = new EducationDescription();
        person->setEndTime("11:21");
        EXPECT_EQ (person->getEndTime(), "11:21");
}

