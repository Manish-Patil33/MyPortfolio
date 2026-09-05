@echo off
title Manish Patil Portfolio - Dev Server
color 0A
echo ==================================================
echo ⚡ Launching Manish Patil Full-Stack Portfolio...
echo ==================================================
set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"
node scripts/dev.js
pause
