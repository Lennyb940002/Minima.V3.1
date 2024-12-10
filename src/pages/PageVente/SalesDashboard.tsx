import { useState } from 'react';
import { MetricCard } from '../../components/sales/MetricCard';
import { SalesChart } from '../../components/sales/SalesChart';
import { NotesSection } from '../../components/sales/NotesSection';
import { StatsCard } from '../../components/sales/StatsCard';
import { SalesTable } from '../../components/sales/SalesTable';

export function SalesDashboard() {
  const [salesPeriod, setSalesPeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');
  const [revenuePeriod, setRevenuePeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');
  const [profitPeriod, setProfitPeriod] = useState<'jour' | 'semaine' | 'mois'>('jour');

  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-4" style={{ width: '80%', marginLeft: '10%', marginTop: '-3%' }}>
      {/* Section 1: Vue d'ensemble des ventes avec Note */}
      <div className="row-span-4">
        <div className="bg-black text-white border border-white rounded-[28px] mb-4 " style={{ height: '80%' }}>
          <MetricCard
            title="Vue d'ensemble des ventes"
            value="33"
            period={salesPeriod}
            onPeriodChange={setSalesPeriod}
          />
        </div>
        <NotesSection />
      </div>

      {/* Section 2: Tableau des ventes */}
      <div className="col-span-2 row-span-2 col-start-1 row-start-5" style={{ marginTop: '17%' }}>
        <SalesTable />
      </div>

      {/* Section 3: Vue d'ensemble du CA et Bénéfices */}
      <div className="row-span-4 col-start-2 row-start-1 space-y-4">
        <div className="bg-black text-white border border-white rounded-[28px]" style={{ height: '60%' }}>
          <MetricCard
            title="Vue d'ensemble du CA"
            value="+ 7 096 €"
            period={revenuePeriod}
            onPeriodChange={setRevenuePeriod}
          />
        </div>
        <div className="bg-black text-white border border-white rounded-[28px]" style={{ height: '60%' }}>
          <MetricCard
            title="Bénéfices"
            value="+ 4 520 €"
            period={profitPeriod}
            onPeriodChange={setProfitPeriod}
          />
        </div>
      </div>

      {/* Section 4: Évolution des ventes et Statistiques */}
      <div className="row-span-6 col-start-3 row-start-1 space-y-4">
        <SalesChart />
        <StatsCard />
      </div>
    </div>
  );
}