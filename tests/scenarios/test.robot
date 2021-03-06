*** Settings ***
Library           SeleniumLibrary

Suite Teardown    Close All Browsers

*** Test Cases ***

Headless Chrome
    Documentaion               - Open Browser & take a screenshot
    ${chrome_options} =        Evaluate                              sys.modules['selenium.webdriver'].ChromeOptions()    sys, selenium.webdriver
    Call Method                ${chrome_options}                     add_argument                                         headless
    Call Method                ${chrome_options}                     add_argument                                         disable-gpu
    Call Method                ${chrome_options}                     add_argument                                         no-sandbox
    ${options}=                Call Method                           ${chrome_options}                                    to_capabilities
    Open Browser               ${URL}                                ${Browser}                                           desired_capabilities=${options}
    Maximize Browser Window
    Click Element              id=1                                  # Clicks on element with id 1
    Click Element              id=2
    Click Element              name=delete3                          #Deletes the id with name=delete3
    Capture Page Screenshot