# Downloads Garden wedding-invite assets from Tilda CDN into public/garden
$ErrorActionPreference = "Stop"
$base = "https://static.tildacdn.com"
$out = Join-Path $PSScriptRoot "..\public\garden"
$audioOut = Join-Path $out "audio"
New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $audioOut | Out-Null

$map = [ordered]@{
  # Cover
  "envelope-card.svg"      = "$base/tild3937-6537-4264-a533-306133613231/Vector-3.svg"
  "envelope-flap.svg"      = "$base/tild6664-6262-4430-a165-346563373865/Vector.svg"
  "names.svg"              = "$base/tild3036-6565-4062-b862-393333663530/__.svg"
  "leaf-1.svg"             = "$base/tild3037-6165-4263-b836-393137343430/Vector-1.svg"
  "leaf-2.svg"             = "$base/tild3934-3863-4638-b964-363535393064/Vector-2.svg"
  "photo-right.svg"        = "$base/tild6235-3532-4338-a465-336533366231/photo.svg"
  "photo-left.svg"         = "$base/tild3133-6266-4663-b734-636164643361/photo.svg"
  "leaves-right.svg"       = "$base/tild6239-6638-4364-a530-626166343561/Vector-5.svg"
  "leaves-left.svg"        = "$base/tild3866-6661-4036-a331-336262306634/Vector-6.svg"
  # Venue / where
  "venue.jpg"              = "$base/tild3162-3665-4430-b233-396235333231/Rectangle_418.jpg"
  "venue-deco.svg"         = "$base/tild3031-3535-4731-a539-376235346636/Vector.svg"
  "where-script.svg"       = "$base/tild3535-3864-4135-b834-663538323563/____________.svg"
  "small-leaf.svg"         = "$base/tild3434-3234-4538-a164-366364373134/photo.svg"
  # Timeline
  "tl-gathering.svg"       = "$base/tild6238-3466-4531-b463-623230303638/Vector.svg"
  "tl-ceremony.svg"        = "$base/tild3336-6262-4266-a364-373034313134/Vector-1.svg"
  "tl-dinner.svg"          = "$base/tild3961-3737-4163-a439-666631663765/Vector-2.svg"
  "tl-finish.svg"          = "$base/tild3633-3537-4037-b636-363762306530/Vector-3.svg"
  "arch.svg"               = "$base/tild3233-6130-4231-b134-316233333265/Vector-4.svg"
  "dots.svg"               = "$base/tild6235-3665-4935-b439-383731396162/Line_33.svg"
  # Fixed bg
  "bg-fixed.png"           = "$base/tild6465-3433-4138-b236-363762353237/_1.png"
  # Dress code
  "dc-leaf-right.svg"      = "$base/tild3238-6138-4139-b461-323936633939/Vector-1.svg"
  "dc-leaf-left.svg"       = "$base/tild6230-3833-4130-b665-306432393930/Vector.svg"
  "dc-illustration.svg"    = "$base/tild3930-3366-4661-b139-376462356236/Vector-8.svg"
  "dc-top-leaf.svg"        = "$base/tild3562-6230-4462-a163-363266373862/Vector-9.svg"
  "dc-line.svg"            = "$base/tild3731-3739-4531-b534-313765346135/Vector.svg"
  # Wishes
  "gift-1.svg"             = "$base/tild6634-3863-4437-a436-303031363663/Vector-1.svg"
  "gift-2.svg"             = "$base/tild3330-6261-4266-b439-383932633166/Vector.svg"
  "wishes-illustration.svg"= "$base/tild6630-3463-4934-b435-613537643266/Vector-2.svg"
  "wishes-leaf.svg"        = "$base/tild3963-3533-4166-b264-666137306430/Vector-3.svg"
  "butterfly-1.svg"        = "$base/tild3838-3032-4431-b039-303764663330/Vector-1.svg"
  "butterfly-2.svg"        = "$base/tild3333-3738-4135-a664-363439666563/Vector.svg"
  # RSVP form
  "form-deco-tr.svg"       = "$base/tild6430-3062-4165-a362-313133306437/Vector-4.svg"
  "form-frame.svg"         = "$base/tild3237-6564-4236-b265-303330303435/Group_1430.svg"
  "form-bouquet.svg"       = "$base/tild6334-6231-4566-a665-643038383237/Group_1421.svg"
  "envelope-mini.svg"      = "$base/tild6332-3234-4034-b862-316232316261/_.svg"
  "form-leaf.svg"          = "$base/tild3761-3837-4135-a562-336234333332/Vector-1.svg"
  "ribbon.svg"             = "$base/tild3832-3161-4437-b135-616664336337/Group_1426.svg"
  "line-photo.svg"         = "$base/tild3336-3037-4631-b730-376132396262/photo.svg"
  # QR
  "qr.svg"                 = "$base/tild6436-3433-4239-b838-393362343332/photo.svg"
}

foreach ($name in $map.Keys) {
  $url = $map[$name]
  $dest = Join-Path $out $name
  Write-Host "Downloading $name"
  curl.exe -s -L -o $dest $url
}

# Audio
curl.exe -s -L -o (Join-Path $audioOut "music.mp3") "https://raw.githubusercontent.com/Alinamalts/music-/main/Andrea-Vanzo-Soulmate-2.mp3"

Write-Host "Done."
