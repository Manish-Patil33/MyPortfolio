$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "⚡ Launching Manish Patil Full-Stack Portfolio..." -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Set-Location -Path $PSScriptRoot
node scripts/dev.js
