import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import { useStore } from '../stores/RootStore';
import { 
  Home, 
  ArrowLeft, 
  Star, 
  Heart, 
  ShoppingCart, 
  Settings,
  Moon,
  Sun,
  Zap,
  Shield,
  Award,
  TrendingUp,
  Users,
  MessageCircle,
  Bell,
  Search,
  Menu
} from 'lucide-react';
import { 
  Container, 
  TextField, 
  Chip, 
  Avatar,
  Badge,
  IconButton,
  Tooltip,
  Fab,
  Switch,
  FormControlLabel
} from '@mui/material';

const SupportPage = observer(() => {
  const navigate = useNavigate();
  const { todoViewModel } = useStore();
  const [darkMode, setDarkMode] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [liked, setLiked] = useState(false);
  const [notifications, setNotifications] = useState(3);

  const handleAddTodo = () => {
    if (todoText.trim()) {
      todoViewModel.handleAddTodo(todoText);
      setTodoText('');
    }
  };

  const gradients = [
    'bg-gradient-to-r from-violet-600 to-indigo-600',
    'bg-gradient-to-r from-cyan-500 to-blue-500',
    'bg-gradient-to-r from-emerald-500 to-teal-500',
    'bg-gradient-to-r from-orange-500 to-red-500',
    'bg-gradient-to-r from-pink-500 to-rose-500',
    'bg-gradient-to-r from-amber-500 to-yellow-500'
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg sticky top-0 z-50 backdrop-blur-lg bg-opacity-90`}>
        <Container maxWidth="lg">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <IconButton onClick={() => navigate('/')} className="hover:scale-110 transition-transform">
                <ArrowLeft className={darkMode ? 'text-white' : 'text-gray-700'} />
              </IconButton>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Demonstração Tailwind CSS
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Badge badgeContent={notifications} color="error">
                <IconButton>
                  <Bell className={darkMode ? 'text-white' : 'text-gray-700'} />
                </IconButton>
              </Badge>
              <FormControlLabel
                control={
                  <Switch 
                    checked={darkMode} 
                    onChange={(e) => setDarkMode(e.target.checked)}
                    icon={<Sun className="text-yellow-500" />}
                    checkedIcon={<Moon className="text-blue-300" />}
                  />
                }
                label=""
              />
            </div>
          </div>
        </Container>
      </header>

      <Container maxWidth="lg" className="py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Potencial do Tailwind CSS
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore componentes modernos e responsivos
          </p>
        </div>

        {/* Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {gradients.map((gradient, index) => (
            <div
              key={index}
              className={`${gradient} p-6 rounded-2xl text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-4">
                <Star className="h-8 w-8" />
                <Chip label={`Card ${index + 1}`} className="bg-white/20 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Gradiente {index + 1}</h3>
              <p className="text-white/90">
                Cartão com gradiente animado e efeitos hover
              </p>
            </div>
          ))}
        </div>

        {/* Todo List with Glass Effect */}
        <Card className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/70'} backdrop-blur-xl border-0 shadow-2xl mb-12`}>
          <CardHeader>
            <CardTitle className={darkMode ? 'text-white' : 'text-gray-800'}>
              Lista de Tarefas Interativa
            </CardTitle>
            <CardDescription className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              Adicione e gerencie suas tarefas com estilo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-6">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Digite uma nova tarefa..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                className={darkMode ? 'bg-gray-700 rounded' : 'bg-white rounded'}
                InputProps={{
                  className: darkMode ? 'text-white' : ''
                }}
              />
              <Button 
                onClick={handleAddTodo}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Adicionar
              </Button>
            </div>

            <div className="space-y-2">
              {todoViewModel.todos.map((todo) => (
                <div
                  key={todo.id}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    todo.completed 
                      ? darkMode ? 'bg-gray-700/50 opacity-60' : 'bg-gray-100 opacity-60'
                      : darkMode ? 'bg-gray-700/30 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => todoViewModel.handleToggleTodo(todo.id)}
                      className="w-5 h-5 rounded accent-purple-500"
                    />
                    <span className={`${todo.completed ? 'line-through' : ''} ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {todo.text}
                    </span>
                  </div>
                  <IconButton 
                    onClick={() => todoViewModel.handleRemoveTodo(todo.id)}
                    size="small"
                    className="hover:bg-red-100 hover:text-red-500"
                  >
                    ×
                  </IconButton>
                </div>
              ))}
            </div>

            {todoViewModel.todos.length > 0 && (
              <div className="mt-4 flex gap-2">
                <Chip 
                  label={`Total: ${todoViewModel.todos.length}`}
                  color="primary"
                  variant="outlined"
                />
                <Chip 
                  label={`Pendentes: ${todoViewModel.todoCount}`}
                  color="warning"
                  variant="outlined"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Feature Cards with Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Zap, title: 'Rápido', color: 'text-yellow-500', bg: 'bg-yellow-100' },
            { icon: Shield, title: 'Seguro', color: 'text-green-500', bg: 'bg-green-100' },
            { icon: Award, title: 'Premium', color: 'text-purple-500', bg: 'bg-purple-100' },
            { icon: TrendingUp, title: 'Escalável', color: 'text-blue-500', bg: 'bg-blue-100' }
          ].map((feature, index) => (
            <Card 
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <CardContent className="text-center py-8">
                <div className={`inline-flex p-4 rounded-full ${darkMode ? 'bg-gray-700' : feature.bg} mb-4`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {feature.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Section */}
        <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden mb-12`}>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Seção Interativa</h3>
            <p className="text-lg mb-6">Experimente os efeitos e animações do Tailwind</p>
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="contained"
                className="bg-white text-purple-600 hover:bg-gray-100 transform transition hover:scale-110"
                startIcon={<Heart className={liked ? 'fill-current' : ''} />}
                onClick={() => setLiked(!liked)}
              >
                {liked ? 'Curtido!' : 'Curtir'}
              </Button>
              <Button 
                variant="outlined"
                className="border-white text-white hover:bg-white hover:text-purple-600 transition-all"
                startIcon={<MessageCircle />}
              >
                Comentar
              </Button>
              <Button 
                variant="outlined"
                className="border-white text-white hover:bg-white hover:text-purple-600 transition-all"
                startIcon={<ShoppingCart />}
              >
                Comprar
              </Button>
            </div>
          </div>
          <CardContent className={darkMode ? 'bg-gray-800' : ''}>
            <div className="grid grid-cols-3 gap-4 text-center py-6">
              <div>
                <Users className={`h-8 w-8 mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>1.2k</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Usuários</p>
              </div>
              <div>
                <Heart className={`h-8 w-8 mx-auto mb-2 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>3.4k</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Curtidas</p>
              </div>
              <div>
                <MessageCircle className={`h-8 w-8 mx-auto mb-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                <p className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>892</p>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Comentários</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Floating Action Button */}
        <Tooltip title="Configurações" placement="left">
          <Fab 
            color="primary" 
            className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            onClick={() => setNotifications(0)}
          >
            <Settings className="text-white" />
          </Fab>
        </Tooltip>
      </Container>
    </div>
  );
});

export default SupportPage;