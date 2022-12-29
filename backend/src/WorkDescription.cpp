#include "../header/WorkDescription.h"

WorkDescription::WorkDescription() {
    title = "";
    company = "";
    startTime = "";
    endTime = "";
    workBiography = "";
}

void WorkDescription::setTitle(string t) {
    title = t;
}
string WorkDescription::getTitle() {
    return title;
}

void WorkDescription::setCompany(string c) {
    company = c;
}
string WorkDescription::getCompany() {
    return company;
}
void WorkDescription::setStartTime(string s) {
    startTime = s;
}
string WorkDescription::getStartTime() {
    return startTime;
}

void WorkDescription::setEndTime(string e) {
    endTime = e;
}
string WorkDescription::getEndTime() {
    return endTime;
}

void WorkDescription::setWorkBiography(string b) {
    workBiography = b;
}
string WorkDescription::getWorkBiography() {
    return workBiography;
}