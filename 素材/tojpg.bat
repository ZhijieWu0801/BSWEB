@echo off

for %%F in (*.png) do (
    ren "%%F" "%%~nF.avif"
    echo Renamed: %%~nxF -^> %%~nF.png
)

pause
