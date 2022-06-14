SELECT * FROM romaneio
INNER JOIN notafiscal
ON notafiscal.codromaneio = romaneio.codromaneio
INNER JOIN itemnotafiscal
ON itemnotafiscal.idnotafiscal = notafiscal.idnotafiscal
INNER JOIN produto
ON produto.codproduto = itemnotafiscal.codproduto
WHERE romaneio.codromaneio = $1