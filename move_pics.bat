@echo off
echo Moving local images and video to root folder for GitHub compatibility...
if exist "images\img1.jpeg" (
    move /y "images\img*.jpeg" .
)
if exist "images\vid1.mp4" (
    move /y "images\vid*.mp4" .
)
echo.
echo Move complete! All photos and videos are now in the root folder.
pause
