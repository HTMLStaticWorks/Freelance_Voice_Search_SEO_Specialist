$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "login.html|register.html|dashboard.html|index.html") {
        continue
    }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    # Replace id="theme-toggle" and inject classes
    $content = [regex]::Replace($content, '<button class="([^"]+)" id="theme-toggle">', '<button class="$1 d-none d-lg-inline-flex theme-toggle">')
    
    # Replace id="rtl-toggle" and inject classes
    $content = [regex]::Replace($content, '<button class="([^"]+)" id="rtl-toggle">', '<button class="$1 d-none d-lg-inline-flex rtl-toggle">')
    
    # Mobile menu injection
    $replacement = '<div class="d-lg-none mt-4">
                        <div class="d-flex justify-content-center gap-3 mb-4">
                            <button class="icon-btn theme-toggle">
                                <i class="bi bi-moon-stars"></i>
                            </button>
                            <button class="icon-btn rtl-toggle">
                                RTL
                            </button>
                        </div>
                        <a href="login.html"'
    
    $content = [regex]::Replace($content, '<div class="d-lg-none mt-4">\s*<a href="login.html"', $replacement)
    
    [System.IO.File]::WriteAllText($file.FullName, $content)
}
Write-Host "Done"
