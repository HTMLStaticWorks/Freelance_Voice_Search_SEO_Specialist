$files = Get-ChildItem -Filter *.html
foreach ($file in $files) {
    if ($file.Name -match "login.html|register.html|dashboard.html") {
        continue
    }
    
    $content = [System.IO.File]::ReadAllText($file.FullName)
    
    if (-not ($content -match '<div class="d-lg-none mt-4">')) {
        $replacement = '</ul>
                    <div class="d-lg-none mt-4">
                        <div class="d-flex justify-content-center gap-3 mb-4">
                            <button class="icon-btn theme-toggle">
                                <i class="bi bi-moon-stars"></i>
                            </button>
                            <button class="icon-btn rtl-toggle">
                                RTL
                            </button>
                        </div>
                        <a href="login.html" class="btn btn-primary w-100 mb-2">Login</a>
                        <a href="register.html" class="btn btn-secondary w-100">Sign Up</a>
                    </div>
                </div>
            </div>'
        
        $content = [regex]::Replace($content, '</ul>\s*</div>\s*</div>\s*</div>\s*</header>', "$replacement`r`n        </div>`r`n    </header>")
        
        [System.IO.File]::WriteAllText($file.FullName, $content)
    }
}
Write-Host "Done"
