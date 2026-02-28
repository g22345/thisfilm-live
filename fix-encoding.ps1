# Fix BIG5-encoded TSX files by re-encoding to UTF-8
$dir = "src\components"
$files = Get-ChildItem -Path $dir -Filter "*.tsx" -Recurse

foreach ($file in $files) {
    try {
        # Try reading as UTF-8 strictly
        $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
        $utf8 = New-Object System.Text.UTF8Encoding($false, $true)
        $null = $utf8.GetString($bytes)
        Write-Host "OK: $($file.Name)"
    } catch {
        Write-Host "BROKEN: $($file.Name) - needs re-encoding"
    }
}
