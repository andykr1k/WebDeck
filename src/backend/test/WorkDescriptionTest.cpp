#include "../header/WorkDescription.h"
#include "gtest/gtest.h"
#include <string>

using namespace std;

TEST(WorkDescriptionTests, WorkDescriptionConstructor) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getTitle(), "");
    EXPECT_EQ (workDes->getCompany(), "");
    EXPECT_EQ (workDes->getEndTime(), "");
    EXPECT_EQ (workDes->getStartTime(), "");
}

TEST(WorkDescriptionTests, TitleGetEmpty) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getTitle(), "");
}
TEST(WorkDescriptionTests, TitleGetSet) {
    WorkDescription *workDes = new WorkDescription();
    workDes->setTitle("Head of Working Hard");
    EXPECT_EQ (workDes->getTitle(), "Head of Working Hard");
}

TEST(WorkDescriptionTests, CompanyGetEmpty) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getCompany(), "");
}
TEST(WorkDescriptionTests, CompanyGetSet) {
    WorkDescription *workDes = new WorkDescription();
    workDes->setCompany("World Wide Wickets");
    EXPECT_EQ (workDes->getCompany(), "World Wide Wickets");
}

TEST(WorkDescriptionTests, DateEndGetEmpty) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getEndTime(), "");
}
TEST(WorkDescriptionTests, DateEndGetSet) {
    WorkDescription *workDes = new WorkDescription();
    workDes->setEndTime("1478");
    EXPECT_EQ (workDes->getEndTime(), "1478");
}

TEST(WorkDescriptionTests, DateStartGetEmpty) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getStartTime(), "");
}
TEST(WorkDescriptionTests, DateStartGetSet) {
    WorkDescription *workDes = new WorkDescription();
    workDes->setStartTime("1478");
    EXPECT_EQ (workDes->getStartTime(), "1478");
}

TEST(WorkDescriptionTests, WorkBiographyStartGetEmpty) {
    WorkDescription *workDes = new WorkDescription();
    EXPECT_EQ (workDes->getWorkBiography(), "");
}
TEST(WorkDescriptionTests, WorkBiographyStartGetSet) {
    WorkDescription *workDes = new WorkDescription();
    workDes->setWorkBiography("I did a lot of work and plz hire me.");
    EXPECT_EQ (workDes->getWorkBiography(), "I did a lot of work and plz hire me.");
}