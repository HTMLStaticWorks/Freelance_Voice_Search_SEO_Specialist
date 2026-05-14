$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "login.html|register.html|dashboard.html") {
        continue
    }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    if ($content -match '(?s)<header class="navbar.*?</header>') {
        $header = $matches[0]
        $newHeader = $header -replace 'navbar-expand-lg', 'navbar-expand-xl'
        $newHeader = $newHeader -replace 'order-lg-3', 'order-xl-3'
        $newHeader = $newHeader -replace 'd-lg-inline-flex', 'd-xl-inline-flex'
        $newHeader = $newHeader -replace 'd-lg-inline-block', 'd-xl-inline-block'
        $newHeader = $newHeader -replace 'd-lg-none', 'd-xl-none'
        
        $content = $content.Replace($header, $newHeader)
        [System.IO.File]::WriteAllText($file.FullName, $content)
    }
}
Write-Host "Done"
