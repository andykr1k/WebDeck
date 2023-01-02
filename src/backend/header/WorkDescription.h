#ifndef WORKDESCRIPTION_H
#define WORKDESCRIPTION_H

#include <string>
using namespace std;

class WorkDescription
{
private:
    string title;
    string company;
    string startTime;
    string endTime;
    string workBiography;

public:
    WorkDescription();
    void setTitle(string);
    string getTitle();
    void setCompany(string);
    string getCompany();
    void setStartTime(string);
    string getStartTime();
    void setEndTime(string);
    string getEndTime();
    void setWorkBiography(string);
    string getWorkBiography();
};
#endif