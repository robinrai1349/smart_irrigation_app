@echo off

for /f "tokens=14 delims= " %%i in ('ipconfig ^| findstr "IPv4 Address"') do (
    echo %%i:3000
)
