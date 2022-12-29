#include "../header/UserInput.h"
#include <iostream>
#include <string>
using namespace std;

void UserInput::clearTerminal(){
    string c = "clear";
    int n = c.length();
    char char_array[n + 1];
    strcpy(char_array, c.c_str());
    system(char_array);
}

void UserInput::getWorkExperience(User *person){

    WorkDescription *work = new WorkDescription();

    cout << "Please enter job title (Ex: Software Engineer)" << endl;
    cout << "Job Title: ";

    string jobTitle;
    cin.clear();
    cin.ignore();
    getline(cin,jobTitle);
    work->setTitle(jobTitle); 
    

    clearTerminal();
    cout << "Please enter company name (Ex: Apple)" << endl;
    cout << "Company Name: ";
    string companyName;
    cin.clear();
    getline(cin,companyName);
    work->setCompany(companyName);

    clearTerminal();
    cout << "What year did you start this position? (Ex: 2021)" << endl;
    cout << "Start Year: ";
    string startYear;
    cin >> startYear;
    work->setStartTime(startYear);

    clearTerminal();
    cout << "What year did you work until in this position? (Ex: 2022 or Current)" << endl;
    cout << "End Year: ";
    string endYear;
    cin >> endYear;
    work->setEndTime(endYear);

    clearTerminal();
    cout << "Please enter a description of your work in this position. " << endl;
    cout << "Type '~' then press ENTER to finalize your entry." << endl << endl;
    string workBio;
    cin.clear();
    getline(cin,workBio, '~');
    work->setWorkBiography(workBio);

    person->getDescriptions()->setWorkDescription(work);
}

void UserInput::getEducation(User *person){

    EducationDescription *education = new EducationDescription();

    cout << "Please enter your major (Ex: Data Science)" << endl;
    cout << "Major: ";
    string major;
    cin.clear();
    cin.ignore();
    getline(cin,major);
    education->setMajor(major);
    

    cout << "Please enter the name of school/institute you attended (Ex: UCR)" << endl;
    cout << "School Name: ";
    string school;
    cin.clear();
    getline(cin,school);
    education->setSchool(school);

    cout << "What year did you start attending this school? (Ex: 2019)" << endl;
    cout << "Start Year: ";
    string startYear;
    cin >> startYear;
    education->setStartTime(startYear);

    cout << "What year did you graduate from this school? (Ex: 2019 or 'In Progress')" << endl;
    cout << "End Year: ";
    string endYear;
    cin >> endYear;
    education->setEndTime(endYear);
    clearTerminal();

    person->getDescriptions()->setEducationDescription(education);
}

void UserInput::getSocialDescription(User *person){

    SocialDescription *social = new SocialDescription();

    cout << "Please enter the name of the platform. (Ex: linkedin/twitter/facebook)" << endl;
    cout << "Platform: ";
    string platform;
    cin.clear();
    cin.ignore();
    getline(cin,platform);
    social->setPlatform(platform);
    

    cout << "Please enter the URL link of your page on this platform" << endl;
    cout << "Link: ";
    string link;
    cin.clear();
    getline(cin,link);
    social->setLink(link);

    person->getDescriptions()->setSocialDescription(social);
}
void UserInput::getLanguage(User *person){

    LanguageDescription *language = new LanguageDescription();

    cout << "What language do you speak. (Ex: Arabic)" << endl;
    cout << "Language: ";
    string lang;
    cin.clear();
    cin.ignore();
    getline(cin,lang);
    language->setLangName(lang);

    string flnt = "";
    string choice = "";

    bool check = true;
    while(check){

        cout << "How fluent are you in this language?" << endl;
        cout << "1 = Beginner" << endl ;
        cout << "2 = Proficient" << endl ;
        cout << "3 = Fluent" << endl ;
        cin >> choice;

        if(choice == "1"){
            flnt = "Beginner";
            break;
        }

        if(choice == "2"){
            flnt = "Proficient";
            break;
        }

        if(choice == "3"){
            flnt = "Fluent";
            break;
        }

        cout << "Invalid entry, please try again." << endl;

    }
    language->setFluency(flnt);

    person->getDescriptions()->setLanguageDescription(language);

}

void UserInput::GetUserInfo(User *person){

    //getting basic user info name, phone, email, bio.
    clearTerminal();
    cout << "*************************************" << endl;
    cout << "   Welcome to Portfolio Generator    " << endl;
    cout << "*************************************" << endl;

    cout << "Please enter your name (Ex: Bruce Wayne): ";
    string name;
    getline(cin, name);
    person->setName(name);

    clearTerminal();
    cout << "Hi " << person->getName() << "!" << endl;
    cout << "Please enter your phone number: ";
    string phone;
    getline(cin, phone);
    person->setPhone(phone);

    clearTerminal();
    cout << "Please enter your email address: ";
    string email;
    cin >> email;
    person->setEmail(email);

    clearTerminal();
    cout << "Please enter your portoflio's Biography: " << endl;
    cout << "Type '~' then press ENTER to move to the next step." << endl;
    string bio;
    getline(cin,bio, '~');
    person->setBiography(bio);
    cout << bio << endl;

   clearTerminal();
    bool checkLoop = true;
    while(checkLoop){
    cout << "Would you like to add a new work experience? (Y/N): " << endl;
    string a;
    cin >> a;
    for (auto & c: a) c = toupper(c);  
    if(a == "Y"){
        getWorkExperience(person);
        cout << "Experience Submitted!" << endl;
        continue;
    }
    if(a == "N"){
        clearTerminal();
        cout << "Moving to the next step..." << endl;
        checkLoop = false;
        break;
    }
    clearTerminal();
    cout << "Invalid entry, please enter Y or N" << endl;
    }

//***Getting Education Experience

    clearTerminal();
    bool checkEduLoop = true;
    while(checkEduLoop){
    cout << "Would you like to add a new education experience? (Y/N): ";
    string a;
    cin >> a;
    for (auto & c: a) c = toupper(c);  
    if(a == "Y"){
        getEducation(person);
        cout << "Education Submitted!" << endl;
        continue;
    }
    if(a == "N"){
        clearTerminal();
        cout << "Moving to the next step..." << endl;
        checkEduLoop = false;
        break;
    }
    clearTerminal();
    cout << "Invalid entry, please enter Y or N" << endl;
    }

    
//***Getting social media links

    clearTerminal();
    bool checkSocLoop = true;
    while(checkSocLoop){
    cout << "Would you like to add a new social platform link? (Y/N): ";
    string a;
    cin >> a;
    for (auto & c: a) c = toupper(c);  
    if(a == "Y"){
        getSocialDescription(person);
        cout << "Link Submitted!" << endl;
        continue;
    }
    if(a == "N"){
        cout << "Moving to the next step..." << endl;
        checkSocLoop = false;
        break;
    }
    clearTerminal();
    cout << "Invalid entry, please enter Y or N" << endl;
    }

//***Getting spoken languages

    clearTerminal();
    bool checkLangLoop = true;
    while(checkLangLoop){
    cout << "Would you like to add a spoken language to your portfolio? (Y/N): ";
    string a;
    cin >> a;
    for (auto & c: a) c = toupper(c);  
    if(a == "Y"){
        getLanguage(person);
        cout << "Language Added!" << endl;
        continue;
    }
    if(a == "N"){
        cout << "Moving to the next step..." << endl;
        checkLangLoop = false;
        break;
    }
    clearTerminal();
    cout << "Invalid entry, please enter Y or N" << endl;
    }

}
