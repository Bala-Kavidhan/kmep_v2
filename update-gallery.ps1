$dir = Join-Path $PSScriptRoot "IMAGES\OUR PROJECTS"
# video = its poster image. Posters are hidden as separate tiles.
$posters = @{ 'lift.mp4' = 'kmep-lift-poster.jpg'; 'v_02.mp4' = 'c_02.jpg' }

$items = Get-ChildItem $dir -File |
  Where-Object { $_.Extension -match '^\.(jpe?g|png|webp|mp4)$' -and $posters.Values -notcontains $_.Name } |
  Sort-Object Name |
  ForEach-Object { if ($posters.ContainsKey($_.Name)) { $_.Name + '|' + $posters[$_.Name] } else { $_.Name } }

$json = ConvertTo-Json -InputObject @($items)
[IO.File]::WriteAllText("$dir\gallery.json", $json, (New-Object System.Text.UTF8Encoding $false))
"$(@($items).Count) items written to gallery.json"