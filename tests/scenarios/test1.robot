*** Variables ***

${HOST}       127.0.0.1
${PORT}       3000
${BROWSER}    chrome
${SERVER}     http://google.com


*** Settings ***

Library       SeleniumLibrary      timeout=5    implicit_wait=0

*** Test Cases ***

Scenario: Wait for react keyword waits for loading
    Go to                  ${SERVER}
    Page should contain    Google offered in
