import { NextResponse } from 'next/server';

export async function GET() {
  const geoJson = (
    await import('@/app/__mock__/db/dashboard/monitor/100000.geoJson.json')
  ).default;

  return NextResponse.json(geoJson, { status: 200 });
}
