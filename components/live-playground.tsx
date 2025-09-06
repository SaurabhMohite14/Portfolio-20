"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Play, Code, Database, Server, TrendingUp } from "lucide-react"

export function LivePlayground() {
  const [activeDemo, setActiveDemo] = useState("react")

  const demos = {
    react: {
      title: "React Component",
      description: "Enterprise Task Management Dashboard",
      icon: <Code className="h-4 w-4" />,
      code: `// Task Management Component (2+ years experience)
function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  const addTask = (task) => {
    setTasks(prev => [...prev, {
      id: Date.now(),
      ...task,
      createdAt: new Date(),
      status: 'pending'
    }]);
  };
  
  const updateStatus = (id, status) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };
  
  const filteredTasks = tasks.filter(task => 
    filter === 'all' || task.status === filter
  );
  
  return (
    <div className="task-dashboard">
      <TaskFilters filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onUpdate={updateStatus} />
      <TaskForm onAdd={addTask} />
    </div>
  );
}`,
      component: <TaskDashboardDemo />,
    },
    api: {
      title: "API Integration",
      description: "Enterprise CRM API with SAP Integration",
      icon: <Server className="h-4 w-4" />,
      code: `// Enterprise API Service (Real-world experience)
class CRMApiService {
  constructor() {
    this.baseURL = '/api/crm';
    this.sapEndpoint = '/api/sap-integration';
  }
  
  async syncInventoryWithSAP() {
    try {
      const response = await fetch(\`\${this.sapEndpoint}/inventory\`, {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${this.getToken()}\`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ syncType: 'realtime' })
      });
      
      if (!response.ok) {
        throw new Error(\`SAP Sync failed: \${response.status}\`);
      }
      
      return await response.json();
    } catch (error) {
      this.logError('SAP_SYNC_ERROR', error);
      throw error;
    }
  }
  
  async getRoleBasedData(userId, role) {
    const endpoint = \`\${this.baseURL}/users/\${userId}/data\`;
    return this.authenticatedRequest(endpoint, { role });
  }
}`,
      component: <CRMApiDemo />,
    },
    database: {
      title: "Database Query",
      description: "Complex PLM & Manufacturing Analytics",
      icon: <Database className="h-4 w-4" />,
      code: `-- Complex Manufacturing Analytics Query (Real PLM Experience)
WITH inventory_analytics AS (
  SELECT 
    p.product_id,
    p.product_name,
    p.category,
    i.current_stock,
    i.reorder_level,
    AVG(o.quantity) OVER (
      PARTITION BY p.product_id 
      ORDER BY o.order_date 
      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) as avg_monthly_demand,
    LAG(i.current_stock, 1) OVER (
      PARTITION BY p.product_id 
      ORDER BY i.last_updated
    ) as previous_stock
  FROM products p
  JOIN inventory i ON p.product_id = i.product_id
  LEFT JOIN orders o ON p.product_id = o.product_id
  WHERE i.last_updated >= CURRENT_DATE - INTERVAL '90 days'
),
critical_items AS (
  SELECT *,
    CASE 
      WHEN current_stock <= reorder_level THEN 'CRITICAL'
      WHEN current_stock <= (reorder_level * 1.5) THEN 'LOW'
      ELSE 'NORMAL'
    END as stock_status,
    ROUND(
      (current_stock::DECIMAL / NULLIF(avg_monthly_demand, 0)) * 30, 2
    ) as days_of_supply
  FROM inventory_analytics
)
SELECT 
  ci.product_name,
  ci.category,
  ci.current_stock,
  ci.stock_status,
  ci.days_of_supply,
  COUNT(wo.work_order_id) as active_work_orders,
  SUM(wo.planned_quantity) as planned_production
FROM critical_items ci
LEFT JOIN work_orders wo ON ci.product_id = wo.product_id 
  AND wo.status IN ('ACTIVE', 'PLANNED')
GROUP BY ci.product_id, ci.product_name, ci.category, 
         ci.current_stock, ci.stock_status, ci.days_of_supply
HAVING ci.stock_status IN ('CRITICAL', 'LOW')
ORDER BY 
  CASE ci.stock_status 
    WHEN 'CRITICAL' THEN 1 
    WHEN 'LOW' THEN 2 
    ELSE 3 
  END,
  ci.days_of_supply ASC;`,
      component: <ManufacturingAnalyticsDemo />,
    },
  }

  return (
    <section
      id="playground"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/95 to-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance mb-4 text-blue-400"
            style={{
              background: "linear-gradient(to right, #60a5fa, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "#60a5fa", // fallback color
            }}
          >
            Live Code Playground
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real-world examples from my 2+ years of enterprise development experience
          </p>
        </div>

        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-0 mb-6 sm:mb-8 h-auto sm:h-10">
            {Object.entries(demos).map(([key, demo]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2 h-12 sm:h-auto text-sm">
                {demo.icon}
                <span className="hidden xs:inline">{demo.title}</span>
                <span className="xs:hidden">{demo.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(demos).map(([key, demo]) => (
            <TabsContent key={key} value={key}>
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg order-2 lg:order-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                      {demo.icon}
                      {demo.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{demo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 border border-border/30 rounded-lg overflow-hidden">
                      <pre className="p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm max-h-64 sm:max-h-96">
                        <code className="text-foreground/90 whitespace-pre font-mono">{demo.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-lg order-1 lg:order-2">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg text-foreground">
                      <Play className="h-4 w-4" />
                      Live Demo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-6">{demo.component}</CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

function TaskDashboardDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "CRM Integration", status: "completed", priority: "high", assignee: "Saurabh" },
    { id: 2, title: "SAP API Sync", status: "in-progress", priority: "critical", assignee: "Saurabh" },
    { id: 3, title: "Database Migration", status: "pending", priority: "medium", assignee: "Team" },
  ])
  const [filter, setFilter] = useState("all")

  const updateStatus = (id: number, newStatus: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status: newStatus } : task)))
  }

  const filteredTasks = tasks.filter((task) => filter === "all" || task.status === filter)

  const statusColors = {
    completed: "bg-green-600",
    "in-progress": "bg-blue-600",
    pending: "bg-yellow-600",
    critical: "bg-red-600",
  }

  return (
    <div className="p-3 sm:p-6 bg-muted/30 border border-primary/20 rounded-lg backdrop-blur-sm">
      <div className="flex flex-wrap gap-2 mb-4">
        {["all", "pending", "in-progress", "completed"].map((status) => (
          <Button
            key={status}
            size="sm"
            variant={filter === status ? "default" : "outline"}
            onClick={() => setFilter(status)}
            className="capitalize text-xs sm:text-sm flex-1 sm:flex-none min-w-0"
          >
            {status === "in-progress" ? "Progress" : status}
          </Button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-card/60 border border-primary/30 rounded border-l-4 border-l-primary gap-3 sm:gap-0"
          >
            <div className="min-w-0 flex-1">
              <div className="font-medium text-primary text-sm sm:text-base truncate">{task.title}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Assigned to: {task.assignee}</div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Badge className={`${statusColors[task.status as keyof typeof statusColors]} text-white text-xs`}>
                {task.status}
              </Badge>
              <select
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
                className="bg-background border border-border text-foreground text-xs rounded px-2 py-1 min-w-0 focus:ring-2 focus:ring-primary/50"
              >
                <option value="pending">Pending</option>
                <option value="in-progress">Progress</option>
                <option value="completed">Done</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CRMApiDemo() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const [syncStatus, setSyncStatus] = useState("idle")

  const simulateCRMSync = async () => {
    setLoading(true)
    setSyncStatus("syncing")

    // Simulate SAP integration
    setTimeout(() => {
      setData({
        inventory: [
          { id: "INV001", name: "Steel Plates", stock: 150, sapStatus: "synced", lastSync: "2 min ago" },
          { id: "INV002", name: "Hydraulic Pumps", stock: 25, sapStatus: "synced", lastSync: "2 min ago" },
          { id: "INV003", name: "Control Valves", stock: 8, sapStatus: "critical", lastSync: "2 min ago" },
        ],
        totalItems: 3,
        syncTime: new Date().toLocaleTimeString(),
      })
      setSyncStatus("completed")
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="p-3 sm:p-6 bg-muted/30 border border-secondary/20 rounded-lg backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        <Button
          onClick={simulateCRMSync}
          disabled={loading}
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm"
        >
          {loading ? "Syncing..." : "Sync CRM"}
        </Button>
        {syncStatus === "completed" && (
          <Badge variant="outline" className="border-green-500 text-green-600 dark:text-green-400 text-xs">
            <TrendingUp className="h-3 w-3 mr-1" />
            Sync Complete
          </Badge>
        )}
      </div>

      {data && (
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              Total Items: {data.totalItems}
            </Badge>
            <span className="text-xs text-muted-foreground">Last sync: {data.syncTime}</span>
          </div>
          {data.inventory.map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-card/60 border border-secondary/30 rounded gap-2"
            >
              <div className="min-w-0 flex-1">
                <div className="font-medium text-secondary text-sm truncate">{item.name}</div>
                <div className="text-xs text-muted-foreground">ID: {item.id}</div>
              </div>
              <div className="flex justify-between sm:block sm:text-right">
                <div className="font-bold text-foreground text-sm">Stock: {item.stock}</div>
                <Badge
                  variant="outline"
                  className={
                    item.sapStatus === "critical"
                      ? "border-red-500 text-red-600 dark:text-red-400 text-xs"
                      : "border-green-500 text-green-600 dark:text-green-400 text-xs"
                  }
                >
                  {item.sapStatus}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ManufacturingAnalyticsDemo() {
  const mockAnalytics = [
    {
      product: "Hydraulic Cylinder HC-200",
      category: "Hydraulics",
      stock: 12,
      status: "CRITICAL",
      daysSupply: 8,
      workOrders: 2,
      plannedProduction: 50,
    },
    {
      product: "Steel Bearing SB-150",
      category: "Mechanical",
      stock: 45,
      status: "LOW",
      daysSupply: 15,
      workOrders: 1,
      plannedProduction: 100,
    },
    {
      product: "Control Valve CV-300",
      category: "Controls",
      stock: 8,
      status: "CRITICAL",
      daysSupply: 5,
      workOrders: 3,
      plannedProduction: 75,
    },
  ]

  return (
    <div className="p-3 sm:p-6 bg-muted/30 border border-accent/20 rounded-lg backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
        <Badge variant="outline" className="border-accent text-accent text-xs">
          <Database className="h-3 w-3 mr-1" />
          PLM Analytics
        </Badge>
        <Badge variant="secondary" className="text-xs">
          Manufacturing Dashboard
        </Badge>
      </div>

      <div className="space-y-3">
        {mockAnalytics.map((item, index) => (
          <div key={index} className="p-3 sm:p-4 bg-card/60 border border-accent/30 rounded border-l-4 border-l-accent">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div className="min-w-0 flex-1">
                <div className="font-medium text-accent text-sm truncate">{item.product}</div>
                <div className="text-xs text-muted-foreground">{item.category}</div>
              </div>
              <Badge
                variant="outline"
                className={
                  item.status === "CRITICAL"
                    ? "border-red-500 text-red-600 dark:text-red-400 text-xs"
                    : "border-yellow-500 text-yellow-600 dark:text-yellow-400 text-xs"
                }
              >
                {item.status}
              </Badge>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-muted-foreground block sm:inline">Stock:</span>
                <span className="ml-0 sm:ml-2 font-medium text-foreground">{item.stock}</span>
              </div>
              <div>
                <span className="text-muted-foreground block sm:inline">Days:</span>
                <span className="ml-0 sm:ml-2 font-medium text-foreground">{item.daysSupply}</span>
              </div>
              <div>
                <span className="text-muted-foreground block sm:inline">WOs:</span>
                <span className="ml-0 sm:ml-2 font-medium text-foreground">{item.workOrders}</span>
              </div>
              <div>
                <span className="text-muted-foreground block sm:inline">Prod:</span>
                <span className="ml-0 sm:ml-2 font-medium text-foreground">{item.plannedProduction}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
