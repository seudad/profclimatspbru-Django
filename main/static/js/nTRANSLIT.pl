sub translit
{
  my $text = shift;
  $text =~ y/абвгдеёзийклмнопрстуфхъыьэ/abvgdeezijklmnoprstufh'y'e/;
  $text =~ y/АБВГДЕЁЗИЙКЛМНОПРСТУФХЪЫЬЭ/ABVGDEEZIJKLMNOPRSTUFH'Y'E/;
  my %mchars = ('ж'=>'zh','ц'=>'ts','ч'=>'ch','ш'=>'sh','щ'=>'sch',
     'ю'=>'ju','я'=>'ja', 'Ж'=>'Zh','Ц'=>'Ts','Ч'=>'Ch','
     'Щ'=>'Sch','Ю'=>'Ju','Я'=>'Ja');
  for my $c (keys %mchars) {
      $text =~ s/$c/$mchars{$c}/g;
  }
  return $text;
}
