#include "../header/TemplateGenerator.h"
#include "../header/LanguageDescription.h"
#include <iostream>
#include <string>
#include "../header/UserInput.h"
using namespace std;

int main() {

    User *person = new User();

    UserInput *UI = new UserInput();
    UI->GetUserInfo(person);

    TemplateGenerator *gen = new TemplateGenerator();
    gen->runCommand("rm -r ./output/");
    gen->generateTemplates(person);
    cout << "Designs Generated in the output folder!" << endl;

     delete person;
     delete UI;
     delete gen;

    return 0;

}