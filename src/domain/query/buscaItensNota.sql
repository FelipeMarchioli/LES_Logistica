SELECT * FROM notafiscal
INNER JOIN romaneio
ON romaneio.codromaneio = notafiscal.codromaneio
INNER JOIN itemnotafiscal
ON itemnotafiscal.idnotafiscal = notafiscal.idnotafiscal
INNER JOIN produto
ON produto.codproduto = itemnotafiscal.codproduto
WHERE notafiscal.numero = $1