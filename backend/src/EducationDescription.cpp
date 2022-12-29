#include "../header/EducationDescription.h"

#include <string>
#include <iostream>
using namespace std;

EducationDescription::EducationDescription(){
    major = "";
    school = "";
    string startTime = "";
    string endTime = "";
}
void EducationDescription::setMajor(string m){
    major = m;
}
string EducationDescription::getMajor() {
    return major;
}
void EducationDescription::setSchool(string s){
    school = s;
}
string EducationDescription::getSchool() {
    return school;
}
void EducationDescription::setStartTime(string s) {
    startTime = s;
}
string EducationDescription::getStartTime() {
    return startTime;
}
void EducationDescription::setEndTime(string e) {
    endTime = e;
}
string EducationDescription::getEndTime() {
    return endTime;
}
