#ifndef EDUCATIONDESCRIPTION_H
#define EDUCATIONDESCRIPTION_H

#include <string>
using namespace std;

class EducationDescription{
    private:
        string major;
        string school;
        string startTime; 
        string endTime;
    public:
        EducationDescription();
        void setMajor(string m);
        string getMajor();
        void setSchool(string s);
        string getSchool();
        void setStartTime(string s);
        string getStartTime();
        void setEndTime(string e);
        string getEndTime();
};
#endif