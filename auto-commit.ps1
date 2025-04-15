# auto-commit.ps1

$path = Get-Location
Write-Host "📁 Monitoreando carpeta: $path"

while ($true) {
  git add .
  $changes = git diff --cached --name-only

  if ($changes) {
    $msg = "Actualización automática: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
    git commit -m "$msg"
    git push origin main
    Write-Host "✅ Cambios subidos: $msg"
  }

  Start-Sleep -Seconds 60  # Espera 1 minuto antes de volver a revisar
}
