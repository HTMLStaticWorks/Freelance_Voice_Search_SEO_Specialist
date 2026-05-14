$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "login.html|register.html|dashboard.html") {
        continue
    }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    if ($content -match '(?s)<header class="navbar.*?</header>') {
        $header = $matches[0]
        $newHeader = $header -replace 'navbar-expand-xl', 'navbar-expand-lg'
        $newHeader = $newHeader -replace 'order-xl-3', 'order-lg-3'
        $newHeader = $newHeader -replace 'd-xl-inline-flex', 'd-lg-inline-flex'
        $newHeader = $newHeader -replace 'd-xl-inline-block', 'd-lg-inline-block'
        $newHeader = $newHeader -replace 'd-xl-none', 'd-lg-none'
        
        $content = $content.Replace($header, $newHeader)
        [System.IO.File]::WriteAllText($file.FullName, $content)
    }
}
Write-Host "Done"
