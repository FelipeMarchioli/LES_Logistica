SELECT * FROM public.romaneio 
INNER JOIN public.veiculo 
ON veiculo.idveiculo = romaneio.idveiculo 
WHERE romaneio.codromaneio = $1