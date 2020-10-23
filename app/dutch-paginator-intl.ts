import { MatPaginatorIntl } from "@angular/material";

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) {
    return `0 van ${length}`;
  }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // Se o índice inicial exceder o comprimento da lista, não tente corrigir o índice
  // final até o fim.
  const endIndex =
    startIndex < length
      ? Math.min(startIndex + pageSize, length)
      : startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
};

export function getDutchPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = "Itens por página:";
  paginatorIntl.nextPageLabel = "Próxima página";
  paginatorIntl.previousPageLabel = "Página anterior";
  paginatorIntl.lastPageLabel = "Última página";
  paginatorIntl.firstPageLabel = "Primeira página";
  paginatorIntl.getRangeLabel = dutchRangeLabel;

  return paginatorIntl;
}
