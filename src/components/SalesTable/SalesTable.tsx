// components/SalesTable/SalesTable.tsx
import React, { useState } from 'react';
import { SalesTableHeader } from './SalesTableHeader';
import { SalesTableRow } from './SalesTableRow';
import { AddSaleModal } from './AddSaleModal';
import { AddSaleButton } from './AddSaleButton';
import { Sale, SalesTableProps } from '../../types/sales';

export function SalesTable({ sales, onAddSale, onDeleteSale }: SalesTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalSales = sales.reduce((sum, sale) => sum + sale.salePrice, 0);
  const totalQuantity = sales.reduce((sum, sale) => sum + sale.quantity, 0);
  const totalMargin = sales.reduce((sum, sale) =>
    sum + (sale.salePrice - sale.unitCost * sale.quantity), 0);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-lg border-b border-white/10 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ventes</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2"
        >
          <span>Ajouter Vente</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto flex-grow p-4">
        <table className="w-full text-center text-white">
          <thead className="bg-black/30">
            <tr>
              <th className="px-4 py-3">Produit</th>
              <th className="px-4 py-3">Quantité</th>
              <th className="px-4 py-3">Prix de vente</th>
              <th className="px-4 py-3">Coût unitaire</th>
              <th className="px-4 py-3">Marge</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Mode de paiement</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-black/5">
            {sales.map(sale => (
              <SalesTableRow
                key={sale.id}
                sale={sale}
                onDelete={onDeleteSale}
              />
            ))}
          </tbody>
          <tfoot className="bg-black/30">
            <tr>
              <td className="px-4 py-3 font-bold">Totaux</td>
              <td className="px-4 py-3">{totalQuantity}</td>
              <td className="px-4 py-3">{totalSales.toFixed(2)} €</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">{totalMargin.toFixed(2)} €</td>
              <td colSpan={6}></td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Modal */}
      <AddSaleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={onAddSale}
      />
    </div>
  );
}
